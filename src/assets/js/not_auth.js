const path = "https://maltachronicles.altervista.org/malta-project.php";

const HEADERS = {
  "Accept": "application/json",
  "Content-Type": "application/json",
};

function genereteUrl(call) {
    return path+"?call=" + call;
}

async function parseObject(obj){
    return JSON.stringify(
            await obj.then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
    );
}

export function notAuthGet(call) {
    return parseObject(
        fetch(genereteUrl(call), {
        headers: HEADERS,
        method: "GET",
      })
    )
}

export function notAuthPost(call, body=undefined) {
  return parseObject(
      fetch(genereteUrl(call), {
      headers: HEADERS,
      method: "POST",
      body: JSON.stringify(body)
    })
  )
}