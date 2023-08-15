# lostpetreport
Work in Progress, I'll write a readme later. In the meantime here's one written my ChatGPT for me with the jist of it all

# Lost Pet Report - Customizable HTML Form

This repository contains an HTML file named `mercy.html` that provides a customizable lost pet report form. The form is designed to help individuals report a lost pet and gather contact information from those who may have found the pet. The current version is specifically tailored for a lost cat named Mercy, but you can easily customize it to fit your needs.

## How to Use

1. **Clone or Download:** Clone this repository or download the `mercy.html` file to your local machine.

2. **Customization:**
   - **Webhook URL:** In the JavaScript code within the HTML file, you will find a variable named `webhookURL`. Replace the existing webhook URL with your desired URL where you want the form data to be submitted.
   - **Pet Information:** You can replace all instances of "Mercy" with your own pet's name or any other relevant information.

3. **Deploy:**
   - Upload the modified `mercy.html` file to a web server or hosting service.
   - Alternatively, you can directly host the HTML file on platforms like GitHub Pages.

4. **Access the Form:**
   - Users can access the form by visiting the URL where you've hosted the HTML file. 

5. **Automatic UserAgent Data Submission:**
   - As soon as the page loads, the form automatically collects user agent data, including browser information.
   - This information is sent to the provided webhook URL without requiring any user intervention.

## Customization Options

- **Webhook URL:** Replace the existing webhook URL in the JavaScript code with your preferred URL to receive form data.
- **Pet Information:** Customize the pet's name and other relevant details in the HTML content and JavaScript code.
- **Styling:** You can modify the CSS styles to match your preferred design.

## How the Form Works

1. As soon as the page loads, the form automatically collects user agent data and sends it to the webhook
2. Users fill out their contact information (name, email, phone).
3. They can optionally include their location by checking the checkbox.
4. When the form is submitted, the data is sent to the provided webhook URL.
5. If location is included, the user's GPS coordinates are collected.
6. User agent data is automatically collected and sent to the webhook URL upon page load.
7. A thank-you message is displayed after successful submission.

## Note

- This was designed for use paired with Home Assistant.
- Please ensure that the webhook URL you provide is capable of handling the form data and user agent information.
- This form relies on JavaScript and may not function without it.

