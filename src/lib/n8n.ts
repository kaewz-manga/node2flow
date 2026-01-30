const N8N_API_URL = process.env.N8N_API_URL;
const N8N_API_KEY = process.env.N8N_API_KEY;

export interface N8nUserResponse {
  id: string;
  email: string;
  inviteAcceptUrl?: string;
  emailSent?: boolean;
  error?: string;
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
      headers: {
        "Content-Type": "application/json",
        "X-N8N-API-KEY": N8N_API_KEY,
      },
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
      // If user already exists, still return partial info
      if (res.status === 400 || res.status === 409) {
        console.log(`[n8n] User may already exist, returning partial info`);
        return { id: "", email, error: text };
      }
      return null;
    }

    const data = await res.json();
    console.log(`[n8n] Raw API response:`, JSON.stringify(data, null, 2));

    // n8n returns: [{ user: { id, email, role }, error: "" }]
    let entry: any;
    if (Array.isArray(data)) {
      entry = data[0];
    } else {
      entry = data;
    }

    // The actual user data is nested inside entry.user
    const user = entry?.user ?? entry;

    const result: N8nUserResponse = {
      id: user?.id ?? "",
      email: user?.email ?? email,
      inviteAcceptUrl: user?.inviteAcceptUrl ?? undefined,
      emailSent: user?.emailSent ?? entry?.emailSent ?? false,
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
