import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Flutter AI Agency.",
};

export default function MentionsLegales() {
  return (
    <section className="py-32">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-white">
          Mentions légales
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            <strong className="text-white">Éditeur du site :</strong>
            <br />
            Flutter AI Agency — [Forme juridique] au capital de [montant] €
            <br />
            Siège social : [Adresse complète]
            <br />
            SIRET : [Numéro SIRET]
            <br />
            Directeur de la publication : [Nom]
          </p>
          <p>
            <strong className="text-white">Hébergement :</strong>
            <br />
            Netlify, Inc. — 2325 3rd Street, Suite 296, San Francisco,
            California 94107
          </p>
          <p>
            <strong className="text-white">Contact :</strong>
            <br />
            contact@votre-domaine.com
          </p>
        </div>
      </Container>
    </section>
  );
}