const customError = error => {
    if (error === "Login failed") return "Check your email or password"
    return error
}

export default customError