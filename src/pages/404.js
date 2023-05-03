import {useRouter} from "next/router";
import {Button} from "../components/atoms/Button";
import Layout from '../components/templates/Layout';

function Custom404() {

  const router = useRouter();

  const handleClick = () => {
    router.push('/')
  }

  const handleBack = () => {
    router.back()
  }

  return (
<Layout>
<div className="container">
      <h1 className="has-text-centered mt-6" style={{fontSize: "8em"}}><strong>404</strong></h1>
      <h2 className="is-size-3 has-text-centered mb-3 has-text-weight-bold">NIE MA TAKIEJ STRONY</h2>
      <p className="has-text-centered">Strona, którą chcesz otworzyć nie istnieje. Mogła zostać przeniesiona lub źle wpisałeś jej adres. </p>
      <div className="has-text-centered my-6">
      <Button onClick={handleClick}>PRZEJDŹ NA STRONĘ GŁÓWNĄ</Button>
      </div>
      <div className="has-text-centered">
      <a onClick={handleBack}>WRÓĆ NA POPRZEDNIĄ STRONĘ</a>
      </div>
    </div>
</Layout>
  );
}

export default Custom404;
