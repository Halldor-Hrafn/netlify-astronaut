export async function post({ request }: { request: Request }) {
  const data = await request.formData();
  const text = data.get('name');
  console.log(text);

  return new Response(JSON.stringify(request), {
    status: 200,
  });
}
