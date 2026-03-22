# Arquitectura Angular 21

# 📁 Estructura del Proyecto

```bash
src/
│
├── app/
│   ├── core/
│   ├── shared/
│   ├── features/
│   ├── layout/
│   ├── app.routes.ts
│   └── main.ts
│
├── assets/
└── environments/
```

---

# 🧠 Principios de Arquitectura

## ✔️ 1. Arquitectura basada en Features

Organiza el proyecto por funcionalidades (no por tipo de archivo).

❌ Incorrecto:

```bash
components/
services/
models/
```

✅ Correcto:

```bash
features/
  ├── auth/
  ├── products/
  ├── orders/
```

Cada feature es un módulo funcional independiente.

---

## ✔️ 2. Separación por responsabilidades

| Carpeta  | Responsabilidad                |
| -------- | ------------------------------ |
| core     | Servicios globales (singleton) |
| shared   | Componentes reutilizables      |
| features | Lógica de negocio              |
| layout   | Estructura visual              |

---

# 📦 1. Core (Núcleo de la aplicación)

Contiene lógica global que solo debe existir una vez.

```bash
core/
├── services/
│   ├── api.service.ts
│   ├── auth.service.ts
├── guards/
├── interceptors/
├── models/
```

## 🔹 Contenido típico

* Autenticación
* Interceptores HTTP (tokens, headers)
* Configuración global de API
* Guards

## ⚠️ Reglas

* No depende de features
* Se instancia una sola vez
* Acceso global

---

# 🔁 2. Shared (Reutilizable)

Contiene elementos reutilizables sin lógica de negocio.

```bash
shared/
├── components/
│   ├── button/
│   ├── modal/
├── directives/
├── pipes/
├── utils/
```

## 🔹 Ejemplos

* Botones
* Inputs personalizados
* Pipes
* Helpers

## ⚠️ Reglas

* No lógica de negocio
* No llamadas a API

---

# 🚀 3. Features (Funcionalidades)

Aquí vive la lógica principal del sistema.

```bash
features/
├── auth/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── models/
│   ├── auth.routes.ts
│
├── products/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── models/
│
├── orders/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── models/
```

## 🔹 Estructura interna de un feature

```bash
feature-name/
├── pages/        # Vistas principales
├── components/   # Componentes internos
├── services/     # Lógica y API específica
├── models/       # Interfaces
├── feature.routes.ts
```

## ✔️ Ventajas

* Escalable
* Modular
* Facilita trabajo en equipo
* Reduce conflictos en Git

---

# 🎨 4. Layout

Define la estructura visual general de la app.

```bash
layout/
├── components/
│   ├── navbar/
│   ├── sidebar/
│   ├── footer/
```

---

# 🌐 Routing (Angular Standalone)

Uso de lazy loading para cada feature.

```ts
// app.routes.ts
export const routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes')
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.routes')
  }
];
```

## ✔️ Buenas prácticas

* Lazy loading en todos los módulos grandes
* Separar rutas por feature

---

# 🔌 Comunicación con API

Centralizar llamadas HTTP en `core`.

## 🔹 Servicio base

```ts
// core/services/api.service.ts
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get(endpoint: string) {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }

  post(endpoint: string, data: any) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }
}
```

## 🔹 Uso en features

```ts
// features/products/services/products.service.ts
export class ProductsService {
  constructor(private api: ApiService) {}

  getProducts() {
    return this.api.get('products');
  }
}
```

---

# 📐 Convenciones de Nombres

## 🔹 Archivos

```bash
product-list.component.ts
auth.service.ts
order.model.ts
```

## 🔹 Interfaces

```ts
export interface Product {
  id: number;
  name: string;
}
```
