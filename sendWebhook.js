// netlify-functions/sendWebhook.js
exports.handler = async (event, context) => {
  try {
    const webhookURL = 'https://hooks.nabu.casa/gAAAAABkwVMl7xKUsxvYgXjqodD1jBrPqqWPV_wl5u14Mt8j0vWxYmb7jZk0BMIo6FZXxlSFehzhB5nqHfMrcfGzlJDM4HL3-YnE0fH3da8Z4JQ8Bhmf_WOWhwRDG6XcLZ-LdBw1wW-qLubb4RygLN3GrM-Rqq0Q8Ccc2zGGC3ZQ1VdHT2qinBc=';

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const requestBody = JSON.parse(event.body);

    await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Webhook sent successfully' })
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
