function managerTemplate() {
  return `
  <div class="col-sm-4 justify-content-between">

  <div class="card" style="width: 15rem;">
    <div style='background-color: rgb(83, 83, 219);'>
      <p class="name" >${name}</p>
      <p class="title">${role}</p>
    </div>

    <div class="card-body">
      <p class="card-text">id:${id}</p>
      <p class="card-text">email: ${email}</p>
      <p class="card-text">Office Number: ${officeNumber}</p>
    </div>
  </div>
</div>
`
}