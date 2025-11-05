const HomeFooter = () => {
  return (
    <footer className="border-t py-6 text-sm text-muted-foreground">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} CVMaker — Tous droits réservés</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#">Politique de confidentialité</a>
          <a href="#">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
