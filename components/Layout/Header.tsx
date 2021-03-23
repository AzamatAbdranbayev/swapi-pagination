import Link from "next/link";
import axios from "../../axiosApi";
interface Props {
  children: React.ReactNode;
  data:[]
}
export default function Header({ children ,data}: Props) {
  return (
    <>
      <header className="header">
        <div>
          {/* {Object.keys(data).map((keyName, index) => (
            <Link href={`/${keyName}`} key={index}>
              <a>{`${keyName}`}</a>
            </Link>
          ))} */}
        </div>
      </header>
      {children}
    </>
  );
}

