function internTemplate(name, role, id, email, school) {
  return `
<div class="col-sm-4 justify-content-between">

  <div class="card" style="width: 15rem;">
    <div style='background-color: rgb(83, 83, 219);'>
      <p class="name" >${name}</p>
      <p class="title">${role}</p>
    </div>

    <div class="card-body">
      <p class="card-text">id:${id}</p>
      <p class="card-text">Email: <a href='mailto: ${email}'>${email}</a></p>
      <p class="card-text">School: ${school}</p>
    </div>
  </div>
</div>
`
}

module.exports = internTemplate;