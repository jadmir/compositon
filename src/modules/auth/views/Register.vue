<template>
  <span class="login100-form-title p-b-41">
    Registro
  </span>
  <form class="login	100-form validate-form p-b-33 p-t-5" 
    @submit.prevent="onSubmit"
  >
    <div class="wrap-input100 validate-input" data-validate="Ingrese su nombre">
      <input
        v-model="userfrom.name"
        class="input100"
        type="text"
        placeholder="Nombre"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Ingrese Correo">
      <input
        v-model="userfrom.email"
        class="input100"
        type="email"
        placeholder="Correo"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Ingrese password">
      <input
        v-model="userfrom.password"
        class="input100"
        type="password"
        placeholder="Contraseña"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn" type="submit">
        Crear Cuenta
      </button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'Login' }">Ya tienes cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import useAuth from '../composables/useAuth.js'
import { ref } from "vue";
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  setup() {
    const router = useRouter
    const { createUser } = useAuth()
    const userfrom = ref({
      name: "jadmir",
      email: "jadmir1111@gmail.com",
      password: "123456",
    });

    return {
      userfrom,
      onSubmit: async() => {
        const { ok, message } = await createUser( userfrom.value )

        if ( !ok ) Swal.fire('Error', message, 'error')
        else router.push({ name: 'no-entry' })
      }
    };
  },
};
</script>

<style></style>
