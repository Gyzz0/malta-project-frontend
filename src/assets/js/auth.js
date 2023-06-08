
const path = "https://maltachronicles.altervista.org/malta-project.php";

const HEADERS = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "X-Token": localStorage.getItem("token")
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

export function authGet(call) {
    return parseObject(
        fetch(genereteUrl(call), {
        headers: HEADERS,
        method: "GET",
      })
    )
}

export function authPost(call, body=undefined) {
  return parseObject(
      fetch(genereteUrl(call), {
      headers: HEADERS,
      method: "POST",
      body: JSON.stringify(body)
    })
  )
}

export function authPut(call, body=undefined) {
  return parseObject(
      fetch(genereteUrl(call), {
      headers: HEADERS,
      method: "PUT",
      body: JSON.stringify(body)
    })
  )
}

export function authPatch(call, body=undefined) {
  return parseObject(
      fetch(genereteUrl(call), {
      headers: HEADERS,
      method: "PATCH",
      body: JSON.stringify(body)
    })
  )
}

export function authDelete(call, body=undefined) {
  return parseObject(
      fetch(genereteUrl(call), {
      headers: HEADERS,
      method: "DELETE",
      body: JSON.stringify(body)
    })
  )
}