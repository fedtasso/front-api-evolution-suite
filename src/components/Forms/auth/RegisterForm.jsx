import { useState } from "react";
import { Form, Button, Alert, Spinner, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fisrtname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    nationalId: "",
    passport: "",
    phoneNumber: "",
    address: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    //TO DO pasar a utils o similar (preguntar)
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.email) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirma tu contraseña";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Debes aceptar los términos y condiciones";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Aquí iría tu llamada a la API
      // await authService.register(formData);

      // Simulamos una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);

      // Reset form
      setFormData({
        fisrtname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        nationalId: "",
        passport: "",
        phoneNumber: "",
        address: "",
        acceptTerms: false,
      });
    } catch (error) {
      setErrors({ submit: error.message || "Error al registrar usuario" });
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="register-card">
        <Card.Body className="text-center p-4">
          <div className="success-icon mb-3">✓</div>
          <h4 className="text-success mb-3">¡Registro exitoso!</h4>
          <p className="text-muted mb-3">
            Tu cuenta ha sido creada correctamente. Ya puedes iniciar sesión.
          </p>
          <Button as={Link} to="/login" variant="primary">
            Iniciar Sesión
          </Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div id="register-form" className="pt-5">
      <Card className="register-card">
        <Card.Body className="p-4 custom-bg ">
          <div className="text-center mb-4">
            <h3 className="subtitle">Crear Cuenta</h3>
            <p className="body-text">Regístrate para comenzar</p>
          </div>

          {errors.submit && (
            <Alert variant="danger" className="mb-3">
              {errors.submit}
            </Alert>
          )}

          <Form onSubmit={handleSubmit} noValidate>
            {/* Nombre */}
            <Form.Group className="mb-3 small-text">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                placeholder="Ingresa tu nombre"
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3 small-text">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                placeholder="tu@email.com"
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Contraseña */}
            <Form.Group className="mb-3 small-text">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="Mínimo 6 caracteres"
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Confirmar Contraseña */}
            <Form.Group className="mb-3 small-text">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
                placeholder="Repite tu contraseña"
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Términos y condiciones */}
            <Form.Group className="mb-4 small-text">
              <Form.Check
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                isInvalid={!!errors.acceptTerms}
                disabled={isLoading}
                label={
                  <span>
                    Acepto los{" "}
                    <a
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      términos y condiciones
                    </a>{" "}
                    y la{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      política de privacidad
                    </a>
                  </span>
                }
              />
              {errors.acceptTerms && (
                <div className="text-danger small mt-1">
                  {errors.acceptTerms}
                </div>
              )}
            </Form.Group>

            {/* Botón de registro */}
            <Button
              type="submit"
              // variant= "primary"
              size="lg"
              className="w-100 mb-3 highlight-text botton-color-form"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Registrando...
                </>
              ) : (
                "Crear Cuenta"
              )}
            </Button>

            {/* Enlace a login */}
            <div className="text-center">
              <span className="small-text">¿Ya tienes cuenta? </span>
              <Link to="/login" className="link">
                Inicia sesión aquí
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterForm;
