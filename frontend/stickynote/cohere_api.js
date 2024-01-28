import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+es';


async function summarizeText ( inputText ) {
    const options = {
        method: 'POST',
        url: 'https://api.cohere.ai/v1/summarize',
        headers: {
          accept: 'application/json', 
        'content-type': 'application/json', 
        authorization: 'Bearer '},
        data: {text: inputText, length: 'short', format: 'bullets', extractiveness: 'low', temperature: 0.3}
      };
      
      var result = null;
      try {
        const response = await axios.request(options);
        //console.log(response.data);
        return response.data.summary;
      } catch (error) {
        console.error(error);
        throw error; 
      }

    
}
const userInputText = "Ice cream is a sweetened. It is really sweet and tastes good. However, some people may be lactose intolerant. As a result, many people rely on alternative options instead. Ice cream is a sweetened. It is really sweet and tastes good. However, some people may be lactose intolerant. As a result, many people rely on alternative options instead. Ice cream is a sweetened. It is really sweet and tastes good. However, some people may be lactose intolerant. As a result, many people rely on alternative options instead."; // example from cohere

async function run() {
  try {
    const result = await summarizeText(userInputText);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();



  // new test

