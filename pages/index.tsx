import axios from "../axiosApi";
import Link from "next/link";
export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      {Object.keys(data).map((keyName,index) => (
        <Link href={`/${keyName}`} key={index}>
          <a className="pages__link">{`${keyName}`}</a>
        </Link>
      ))} 
    </div>
  );
}
export async function getServerSideProps() {
  const response = await axios.get("/");
  return { props: { data: response.data } };
}
