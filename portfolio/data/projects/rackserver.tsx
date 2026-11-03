import Project from "@/components/Project";
import RackImage1 from "@/public/img/project/perso/rackserver/rack1.webp";
import RackImage2 from "@/public/img/project/perso/rackserver/rack2.webp";
import RackImage3 from "@/public/img/project/perso/rackserver/rack3.webp";

const images = [RackImage1, RackImage2, RackImage3];
const stacks = ["Docker", "Caddy", "Cloudflare", "Pihole", "SSH"];

export default function RackServer() {
  return (
    <Project
      type="personnelles"
      images={images}
      title="Mon DNS - Rack Server"
      year="2026"
      isLink={false}
      bigTitle={true}
      description={
        <p>
          Voici mon rack serveur fait maison. Monté avec un Switch Netgear
          GS308E, un Raspberry Pi 4, deux Raspberry Pi 3-B, un dock de 8 ports
          d'alimentation, et une structure Rack-Serveur imprimée en 3D. Le
          switch redistribue le réseau vers les Pi, l'un me sert de DNS avec un
          PiHole et l'autre me sert d'hébergeur web avec des conteneurs Docker
          pour les projets, et Caddy pour les certificats HTTPS et redirige les
          requêtes vers les conteneurs. Les sites sont mis en ligne avec mon nom
          de domaine via Cloudflare Tunnel, tous les Pi sont accessibles via
          alias SSH, et chaque port de la box réseau est sécurisé et fermé. Ce
          portfolio est hébergé sur ce même serveur.
        </p>
      }
      stacks={stacks}
    />
  );
}
