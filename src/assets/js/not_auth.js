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

export function notAuthPut(call, body=undefined) {
  return parseObject(
      fetch(genereteUrl(call), {
      headers: HEADERS,
      method: "PUT",
      body: JSON.stringify(body)
    })
  )
}

export function notAuthPatch(call, body=undefined) {
  return parseObject(
      fetch(genereteUrl(call), {
      headers: HEADERS,
      method: "PATCH",
      body: JSON.stringify(body)
    })
  )
}

export function notAuthDelete(call, body=undefined) {
  return parseObject(
      fetch(genereteUrl(call), {
      headers: HEADERS,
      method: "DELETE",
      body: JSON.stringify(body)
    })
  )
}