import { withAuth } from "next-auth/middleware";

const middleware = withAuth({
  callbacks: {
    authorized: ({ token }) => {
      return /^(gabrielrgueiros|lorennamp\.010)@gmail\.com$/.test(
        token?.email || ""
      );
    },
  },
  pages: {
    signIn: "/login",
  },
});

export const config = { matcher: ["/dashboard"] };

export default middleware;
