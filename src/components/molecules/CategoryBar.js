import CategoryLink from "../atoms/CategoryLink"

function CategoryBar() {
    const group1 = [
        '#',
        '#',
        '#'
    ]
  return (
    <div className="container is-flex is-justify-content-space-evenly my-2 is-hidden-touch">
        <CategoryLink linkURL={group1}>SOCJALNE BHP</CategoryLink>
        <CategoryLink linkURL='#'>BIUROWE RODO</CategoryLink>
        <CategoryLink linkURL='#'>MEDYCZNE</CategoryLink>
        <CategoryLink linkURL='#'>WARSZTATOWE</CategoryLink>
        <CategoryLink linkURL='#'>SZKOLNE</CategoryLink>
        <CategoryLink linkURL='#'>AKCESORIA</CategoryLink>
    </div>
  )
}

export default CategoryBar