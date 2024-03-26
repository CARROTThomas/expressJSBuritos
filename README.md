<div class="container mt-5 mb-5">
   <h1 class="mb-4">API Documentation - expressJSBuritos</h1>

  <h3>Base url : burrito.thomas.carrot.com/api</h3>

  <div class="accordion" id="accordionExample">

    <!-- Login -->
<div class="accordion-item">
    <h2 class="accordion-header" id="headingLogin">
        <button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLogin" aria-expanded="false" aria-controls="collapseLogin">
            Login
        </button>
    </h2>
    <div id="collapseLogin" class="accordion-collapse collapse" aria-labelledby="headingLogin" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul>
                <li>Login: <code>POST /login</code></li>
            </ul>
        </div>
    </div>
</div>

<!-- Register -->
<div class="accordion-item">
    <h2 class="accordion-header" id="headingRegister">
        <button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRegister" aria-expanded="false" aria-controls="collapseRegister">
            Register
        </button>
    </h2>
    <div id="collapseRegister" class="accordion-collapse collapse" aria-labelledby="headingRegister" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul>
                <li>Register: <code>POST /register</code></li>
            </ul>
        </div>
    </div>
</div>

<!-- Logout -->
<div class="accordion-item">
    <h2 class="accordion-header" id="headingLogout">
        <button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLogout" aria-expanded="false" aria-controls="collapseLogout">
            Logout
        </button>
    </h2>
    <div id="collapseLogout" class="accordion-collapse collapse" aria-labelledby="headingLogout" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul>
                <li>Logout: <code>POST /logout</code></li>
            </ul>
        </div>
    </div>
</div>

<!-- Find All -->
<div class="accordion-item">
    <h2 class="accordion-header" id="headingFindAll">
        <button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFindAll" aria-expanded="false" aria-controls="collapseFindAll">
            Find All
        </button>
    </h2>
    <div id="collapseFindAll" class="accordion-collapse collapse" aria-labelledby="headingFindAll" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul>
                <li>Find All: <code>GET /findAll</code></li>
            </ul>
        </div>
    </div>
</div>

<!-- CRUD -->
<div class="accordion-item">
    <h2 class="accordion-header" id="headingCRUD">
        <button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCRUD" aria-expanded="false" aria-controls="collapseCRUD">
            CRUD
        </button>
    </h2>
    <div id="collapseCRUD" class="accordion-collapse collapse" aria-labelledby="headingCRUD" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul>
                <li>Show: <code>GET /show/:name</code></li>
                <li>Add: <code>POST /add</code></li>
                <li>Update: <code>PUT /update/:name</code></li>
                <li>Delete: <code>DELETE /delete/:name</code></li>
            </ul>
        </div>
    </div>
</div>

<!-- Activate API -->
<div class="accordion-item">
    <h2 class="accordion-header" id="headingActivateAPI">
        <button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseActivateAPI" aria-expanded="false" aria-controls="collapseActivateAPI">
            Activate API
        </button>
    </h2>
    <div id="collapseActivateAPI" class="accordion-collapse collapse" aria-labelledby="headingActivateAPI" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul>
                <li>Activate API: <code>GET /activateAPI</code></li>
            </ul>
        </div>
    </div>
</div>

  </div>
</div>
