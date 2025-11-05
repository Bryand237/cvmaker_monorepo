import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const HomeAbout: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* Hero */}
      <header className="bg-linear-to-b from-indigo-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              CVMaker — Concevez des CV professionnels en quelques minutes
            </h1>
            <p className="mt-4 text-lg text-indigo-100/90">
              Plateforme intuitive pour créer, personnaliser et exporter des CV
              modernes prêts pour l'impression et le web. Gain de temps, modèles
              professionnels et export PDF haute qualité.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-full" size={"lg"}>
                Commencer
              </Button>
              <Button variant="outline" className="rounded-full" size={"lg"}>
                Voir les modèles
              </Button>
            </div>
          </div>
        </div>
      </header>

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

      <section className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold">Comment ça marche</h2>
            <p className="mt-3 text-muted-foreground max-w-3xl">
              CVMaker vous guide étape par étape : remplissez vos informations,
              ajoutez vos expériences et compétences, choisissez un modèle,
              personnalisez le rendu et exportez. Tout est pensé pour que même
              un débutant puisse obtenir un CV professionnel.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-lg">
                <h4 className="font-semibold">1 — Saisissez vos données</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Formulaires structurés pour chaque section : titre, résumé,
                  expériences, éducation et compétences.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h4 className="font-semibold">2 — Choisissez un modèle</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Sélectionnez un template optimisé pour les recruteurs et
                  ajustez les couleurs/typographies.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h4 className="font-semibold">3 — Exportez & partagez</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Export PDF A4 de haute qualité, partage par lien ou
                  téléchargement direct.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold">Nos modèles</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            Des modèles conçus pour différents marchés et objectifs de carrière
            — clairs, modernes et imprimables.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              Style Américain
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              Style Américain 2
            </div>
            <div className="p-4 bg-white rounded-lg shadow">Style Anglais</div>
            <div className="p-4 bg-white rounded-lg shadow">Style Français</div>
          </div>
        </AnimatedSection>
      </section>

      <section className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold">Sécurité & Confidentialité</h2>
            <p className="mt-3 text-muted-foreground max-w-3xl">
              La sécurité de vos données est notre priorité. Nous utilisons des
              connexions chiffrées (HTTPS), stockons les données de manière
              sécurisée et ne partageons jamais vos informations sans
              consentement explicite. Vous pouvez supprimer vos données à tout
              moment depuis votre tableau de bord.
            </p>

            <ul className="mt-6 list-disc pl-6 text-sm text-muted-foreground">
              <li>Chiffrement en transit et au repos</li>
              <li>Accès limité aux équipes techniques</li>
              <li>Sauvegardes régulières et procédures de récupération</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold">Témoignages</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="p-6 bg-card rounded-lg">
              « Grâce à CVMaker j'ai obtenu plus d'entretiens en une semaine.
              Interface simple et export PDF impeccable. » — Marine, Product
              Designer
            </blockquote>
            <blockquote className="p-6 bg-card rounded-lg">
              « Les modèles sont clairs et adaptés aux recruteurs. Le gain de
              temps est immense. » — Karim, Développeur Full‑Stack
            </blockquote>
            <blockquote className="p-6 bg-card rounded-lg">
              « J'ai apprécié la confidentialité et la qualité d'impression A4.
              » — Léa, Data Analyst
            </blockquote>
          </div>
        </AnimatedSection>
      </section>

      <section className="border-t py-12 bg-muted/10">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold">Foire aux questions (FAQ)</h2>
            <div className="mt-6 space-y-4">
              <details className="p-4 bg-card rounded-md">
                <summary className="font-medium">
                  Puis‑je exporter mon CV en PDF A4 ?
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  Oui — toutes nos templates sont optimisées pour l'impression
                  A4 et l'export PDF conserve la mise en page.
                </p>
              </details>
              <details className="p-4 bg-card rounded-md">
                <summary className="font-medium">
                  Mes données sont‑elles conservées ?
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vous pouvez supprimer vos données à tout moment depuis les
                  paramètres. Nous ne partageons pas vos informations sans
                  consentement.
                </p>
              </details>
              <details className="p-4 bg-card rounded-md">
                <summary className="font-medium">
                  Y a‑t‑il une version gratuite ?
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  Oui — la version gratuite permet de créer et télécharger un CV
                  avec les fonctionnalités de base. Des options premium offrent
                  des modèles supplémentaires et des exports avancés.
                </p>
              </details>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold">Contact & Support</h2>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            Pour toute question commerciale ou technique, contactez notre équipe
            : support@cvmaker.org ou utilisez le formulaire de contact dans
            votre tableau de bord.
          </p>
          <div className="mt-6">
            <Button className="rounded-full">Nous contacter</Button>
          </div>
        </AnimatedSection>
      </section>

      <footer className="border-t py-6 text-sm text-muted-foreground">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} CVMaker — Tous droits réservés</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#">Politique de confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomeAbout;
