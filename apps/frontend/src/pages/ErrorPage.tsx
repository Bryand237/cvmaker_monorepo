import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // Cas: erreur HTTP-like générée par throw new Response(...)
  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Erreur {error.status}</h1>
        <p className="text-muted">
          {error.statusText || "Une erreur est survenue"}
        </p>
        {/* Si vous avez du body JSON, error.data peut contenir des détails */}
        {error.data && (
          <pre className="mt-4">{JSON.stringify(error.data, null, 2)}</pre>
        )}
      </div>
    );
  }

  // Cas: erreur JS classique (throw new Error(...))
  const message =
    (error as Error)?.message ?? "Une erreur inconnue est survenue";
  const stack = (error as Error)?.stack;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Erreur</h1>
      <p className="mt-2">{message}</p>

      {/* Afficher la stack uniquement en dev */}
      {process.env.NODE_ENV === "development" && stack && (
        <pre className="mt-4 text-xs text-red-600">{stack}</pre>
      )}
    </div>
  );
};

export default ErrorPage;
