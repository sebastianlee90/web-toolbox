export default function Layout(props: { children: React.ReactNode }) {
  return <div className="p-4 sm:px-6 lg:px-8">{props.children}</div>;
}
