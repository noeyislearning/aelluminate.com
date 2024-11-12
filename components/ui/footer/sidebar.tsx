export default function Footer() {
  return (
    <footer className="mt-auto flex">
      <div className="container flex w-full flex-col items-start justify-between gap-2 p-2">
        <p className="order-2 text-xs text-stone-800 dark:text-stone-100 md:order-1">
          &copy; {new Date().getFullYear()} Aelluminate. <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
