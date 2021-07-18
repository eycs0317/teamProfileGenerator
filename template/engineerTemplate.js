function engineerTemplate(name, role, id, email, github) {
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
      <p class="card-text">Github: <a href='https://github.com/${github}'>${github}</a></p>
    </div>
  </div>
</div>
`
}

module.exports = engineerTemplate;