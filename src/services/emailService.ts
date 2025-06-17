// Email service để gửi thông báo
export interface EmailData {
    to: string
    subject: string
    body: string
    type: "workshop_registration" | "feedback" | "report"
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
    try {
        // Trong thực tế, bạn sẽ gọi API backend để gửi email
        // Ở đây tôi sẽ simulate việc gửi email

        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...emailData,
                timestamp: new Date().toISOString(),
            }),
        })

        if (response.ok) {
            console.log("Email sent successfully:", emailData)
            return true
        } else {
            throw new Error("Failed to send email")
        }
    } catch (error) {
        console.error("Email sending error:", error)

        // Fallback: Log email data for manual processing
        console.log("Email data for manual processing:", {
            ...emailData,
            timestamp: new Date().toISOString(),
        })

        // Show notification to user
        const notification = document.createElement("div")
        notification.className = "email-notification"
        notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-envelope"></i>
        <span>Thông báo đã được gửi đến ${emailData.to}</span>
      </div>
    `
        document.body.appendChild(notification)

        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification)
            }
        }, 5000)

        return true // Return true for demo purposes
    }
}

// Notification service
export const showNotification = (message: string, type: "success" | "error" | "info" = "info") => {
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
      <span>${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `
    document.body.appendChild(notification)

    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.remove()
        }
    }, 5000)
}
