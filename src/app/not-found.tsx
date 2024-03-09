import { headers } from "next/headers";
import Link from "next/link";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");
  // const data = await getSiteData(domain);
  return (
    <div>
      <h2>Not found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">all page</Link>
      </p>
    </div>
  );
}
