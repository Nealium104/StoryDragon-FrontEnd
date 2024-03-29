export default function Register() {
  return (
    <>
      <form action="/api/User/register">
        <label htmlFor="userName">Username:</label>
        <input type="text" />
        <label htmlFor="email">Email:</label>
        <input type="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" />
        <label htmlFor="bio">Bio(optional):</label>
        <textarea name="bio" id="bio" cols="30" rows="10"></textarea>
      </form>
    </>
  );
}
