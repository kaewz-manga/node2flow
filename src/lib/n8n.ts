const N8N_API_URL = process.env.N8N_API_URL;
const N8N_API_KEY = process.env.N8N_API_KEY;

export interface N8nUserResponse {
  id: string;
  email: string;
  inviteAcceptUrl?: string;
  emailSent?: boolean;
  error?: string;
}

const apiHeaders = () => ({
  "Content-Type": "application/json",
  "X-N8N-API-KEY": N8N_API_KEY!,
});

/**
 * Extract the owner/admin user ID from the API key JWT token (sub claim).
 * Used to construct invite URLs.
 */
function getInviterIdFromApiKey(): string | null {
  if (!N8N_API_KEY) return null;
  try {
    const payload = N8N_API_KEY.split(".")[1];
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString());
    return decoded.sub || null;
  } catch {
    return null;
  }
}

/**
 * Construct the n8n invite/signup URL for a new user.
 * Format: {N8N_URL}/signup?inviterId={adminId}&inviteeId={userId}
 */
function buildInviteUrl(userId: string): string | undefined {
  const inviterId = getInviterIdFromApiKey();
  if (!inviterId || !N8N_API_URL) return undefined;
  return `${N8N_API_URL}/signup?inviterId=${inviterId}&inviteeId=${userId}`;
}

export async function createN8nUser(
  email: string,
): Promise<N8nUserResponse | null> {
  if (!N8N_API_URL || !N8N_API_KEY) {
    console.error("[n8n] Missing N8N_API_URL or N8N_API_KEY");
    return null;
  }

  try {
    const res = await fetch(`${N8N_API_URL}/api/v1/users`, {
      method: "POST",
      headers: apiHeaders(),
      body: JSON.stringify([
        {
          email,
          role: "global:member",
        },
      ]),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`[n8n] Failed to create user (${res.status}): ${text}`);
      if (res.status === 400 || res.status === 409) {
        return { id: "", email, error: text };
      }
      return null;
    }

    const data = await res.json();
    console.log(`[n8n] Raw POST response:`, JSON.stringify(data, null, 2));

    // n8n returns: [{ user: { id, email, role, emailSent }, error: "" }]
    const entry = Array.isArray(data) ? data[0] : data;
    const user = entry?.user ?? entry;

    // Construct invite URL from admin ID + new user ID
    const inviteAcceptUrl =
      user?.inviteAcceptUrl || buildInviteUrl(user?.id);

    const result: N8nUserResponse = {
      id: user?.id ?? "",
      email: user?.email ?? email,
      inviteAcceptUrl,
      emailSent: user?.emailSent ?? false,
    };

    console.log(
      `[n8n] Created user: ${email} (id: ${result.id}, inviteUrl: ${result.inviteAcceptUrl || "none"})`,
    );
    return result;
  } catch (err) {
    console.error("[n8n] Error creating user:", err);
    return null;
  }
}
