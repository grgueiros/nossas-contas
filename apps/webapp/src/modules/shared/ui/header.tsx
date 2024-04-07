import LogoutButton from "@/modules/auth/ui/logout-button";

export default function Header() {
  return (
    <header className="w-full p-2 flex justify-end border-b bg-slate-800">
      <LogoutButton/>
    </header>
  );
}
