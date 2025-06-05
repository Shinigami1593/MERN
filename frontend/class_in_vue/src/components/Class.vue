<template>
    <div class="form-container">
        <h2 class="form-title">Sign Up</h2>
        <div>
            <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" name="name" class="form-input" placeholder="Enter your full name"
                    v-model="name">
                <span v-if="name_error" class="text-red-500 text-sm">{{ name_error }}</span>
            </div>

            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="Enter your email address"
                    v-model="email">
                <span v-if="email_error" class="text-red-500 text-sm">{{ email_error }}</span>
            </div>

            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" name="password" class="form-input"
                    placeholder="Enter your password" v-model="password">
                <span v-if="password_error" class="text-red-500 text-sm">{{ password_error }}</span>
            </div>

            <div v-if="isSalin" class="text-red-500 text-sm">
                Salin is not allowed to create an account.
            </div>

            <button type="submit" class="submit-btn" @click="handleSubmit">Create Account</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref();
const email = ref();
const password = ref();
const name_error = ref()
const email_error = ref();
const password_error = ref();
const isSalin = ref(false);


const handleSubmit = () => {

    const salin = name.value.toLowerCase();

    if (salin == "salin") {
        isSalin.value = true;
    } else {
        if (name.value && email.value && password.value) {
            // Simulate a successful form submission
            alert(`Account created for ${name.value}`);
            // Reset form fields
            name.value = '';
            email.value = '';
            password.value = '';
        } else {
            // Validate fields and show error messages
            if (!name.value) {
                name_error.value = "Name is required";
            } else {
                name_error.value = "";
            }

            if (!email.value) {
                email_error.value = "Email is required";
            } else {
                email_error.value = "";
            }

            if (!password.value) {
                password_error.value = "Password is required";
            } else {
                password_error.value = "";
            }
        };
    }

}


</script>

<style>
.text-red-500 {
    color: #f56565;
}

.text-sm {
    font-size: 0.875rem;
    /* 14px */
}

.form-container {
    margin-inline: auto;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

.form-title {
    text-align: center;
    margin-bottom: 30px;
    color: #720707;
    font-size: 24px;
    font-weight: 600;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
    font-size: 14px;
}

.form-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s ease;
    background-color: #ffffff;
}

.form-input:focus {
    outline: none;
    border-color: #720707;
    box-shadow: 0 0 0 3px rgba(114, 7, 7, 0.1);
}

.form-input::placeholder {
    color: #999;
}

.submit-btn {
    width: 100%;
    padding: 14px;
    background-color: #720707;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

.submit-btn:hover {
    background-color: #5a0606;
}

.submit-btn:active {
    transform: translateY(1px);
}

/* Responsive design */
@media (max-width: 480px) {
    .form-container {
        padding: 30px 20px;
    }

    .form-title {
        font-size: 20px;
    }
}
</style>