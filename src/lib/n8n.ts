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
      return null;
    }

    const data = await res.json();
    // n8n returns array of created users with invite URLs
    const user = Array.isArray(data) ? data[0] : data;
    console.log(
      `[n8n] Created user: ${email} (id: ${user?.id}, inviteUrl: ${user?.inviteAcceptUrl || "none"})`,
    );
    return user;
  } catch (err) {
    console.error("[n8n] Error creating user:", err);
    return null;
  }
}
