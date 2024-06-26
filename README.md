<div class="container mt-5 mb-5">
   <h1 class="mb-4">API Documentation - expressJSBuritos</h1>

  <h3>Base url : burrito.thomas.carrot.com/api</h3>

  <div class="accordion" id="accordionExample">

 <!-- User -->
<div class="accordion-item">
    <h2 class="accordion-header" id="headingLogin">
        <button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLogin" aria-expanded="false" aria-controls="collapseLogin">
            User
        </button>
    </h2>
    <div id="collapseLogin" class="accordion-collapse collapse" aria-labelledby="headingLogin" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul>
               <li>Register: <code>POST user/register</code></li>
               <li>Login: <code>POST user/login</code></li>
               <li>Logout: <code>POST user/logout</code></li>
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
               <li>Find All: <code>GET burritos/findAll</code></li>
                <li>Show: <code>GET burritos/show/:name</code></li>
                <li>Add: <code>POST burritos/add</code></li>
                <li>Update: <code>PUT burritos/update/:name</code></li>
                <li>Delete: <code>DELETE burritos/delete/:name</code></li>
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
                <li>Activate API: <code>GET burritos/activateAPI</code></li>
            </ul>
        </div>
    </div>
</div>

  </div>
</div>
