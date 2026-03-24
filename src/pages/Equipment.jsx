import { Helmet } from 'react-helmet-async'
import EquipmentCatalog from '../components/sections/EquipmentCatalog'

export default function Equipment({ data }) {
  return (
    <>
      <Helmet>
        <title>Pogrebna oprema — katalog | Pogrebno preduzeće Antić</title>
        <meta name="description" content="Katalog pogrebne opreme: sanduci, krstovi, cveće i venci, anđeli. Visokokvalitetna oprema za dostojanstven ispraćaj." />
      </Helmet>

      <div className="pt-28 md:pt-32" />
      <EquipmentCatalog equipment={data.equipment} />
    </>
  )
}
