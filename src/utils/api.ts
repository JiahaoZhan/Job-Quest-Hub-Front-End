import network from './network';


export function loginAPI(data) {
  return network({
    url: `/user/auth`,
    method: "post",
    data
  });
}


export function registerAPI(data) {
  return network({
    url: `/user/new`,
    method: "post",
    data
  })
}

export function searchAPI(data) {
  return network({
    url: `/jobs`,
    method: "post",
    data
  })
}

export function savedAPI() {
  return network({
    url: `/save/jobs`,
    method: "get",
  })
}

export function saveAPI(data) {
  return network({
    url: `/save/jobs`,
    method: "post",
    data
  })
}

export function unsaveAPI(data) {
  return network({
    url: `/unsave/jobs`,
    method: "post",
    data
  })
}


// export function resetPwdAPI(data) {
//   return network({
//     url: `/resetPwd`,
//     method: "post",
//     data
//   })
// }


// export function queryTaskListAPI(params) {
//   return network({
//     url: `/queryTaskList`,
//     method: "get",
//     params
//   })
// }


// export function addTaskAPI(data) {
//   return network({
//     url: `/addTask`,
//     method: "post",
//     data
//   })
// }


// export function editTaskAPI(data) {
//   return network({
//     url: `/editTask`,
//     method: "put",
//     data
//   })
// }


// export function updateTaskStatusAPI(data) {
//   return network({
//     url: `/updateTaskStatus`,
//     method: "put",
//     data
//   })
// }


// export function updateMarkAPI(data) {
//   return network({
//     url: `/updateMark`,
//     method: "put",
//     data
//   })
// }


// export function deleteTaskAPI(data) {
//   return network({
//     url: `/deleteTask`,
//     method: "delete",
//     data
//   })
// }