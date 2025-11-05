import AnimatedSection from "@/components/AnimatedSection";

const DashboardOverview = () => {
  return (
    <div className="space-y-8 p-4 bg-gray-100 rounded-md h-full">
      <section className="container mx-auto px-6 md:px-12 py-12">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 bg-card rounded-lg shadow">
              <h3 className="text-xl font-semibold">Rapide et simple</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Créez un CV professionnel en quelques étapes guidées. Notre
                éditeur prend en charge les sections standard (informations
                personnelles, résumé, expériences, formations, compétences) et
                permet des ajustements fins du design.
              </p>
            </article>

            <article className="p-6 bg-card rounded-lg shadow">
              <h3 className="text-xl font-semibold">Modèles professionnels</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Choisissez parmi plusieurs modèles (style américain, anglais,
                français) conçus par des professionnels du recrutement pour
                maximiser la lisibilité et l'impact visuel.
              </p>
            </article>

            <article className="p-6 bg-card rounded-lg shadow">
              <h3 className="text-xl font-semibold">Export sécurisé</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Exports en PDF optimisés pour l'impression A4 et partage
                numérique. Vos données sont confidentielles et stockées en toute
                sécurité.
              </p>
            </article>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default DashboardOverview;
