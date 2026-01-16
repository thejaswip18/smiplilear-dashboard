"use server";

export async function submitRSVP(formData) {
  const email = formData.get("email");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    return { success: false, message: "Please enter a valid email" };
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields: { Email: email } }],
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Airtable error:", err);
      return { success: false, message: "Submission failed. Try again." };
    }

    const data = await response.json();
    return { success: true, message: "RSVP successful!", id: data.records[0].id };
  } catch (error) {
    console.error("Network error:", error);
    return { success: false, message: "Network error. Try again later." };
  }
}
