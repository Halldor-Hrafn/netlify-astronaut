export async function post({ request }: { request: Request }) {
  const data = await request.formData();
  const text = data.get('name');
  console.log(text);

  // these three fucking lines took like 2 hours of my life I'm never getting back
  const url = new URL('/', 'http://localhost:3000');

  return Response.redirect(url);
}
