import { InfoIcon } from "../icons";

export function MDXNote({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <aside
      {...props}
      style={{ border: "1px solid var(--blueColor)" }}
      className='relative border border-lighter-gray bg-lightest-gray p-2 text-article-color my-4 rounded-lg'
    >
      <div className='absolute -top-3 -left-3 bg-bg rounded-full w-6 h-6 flex items-center justify-center'>
        <InfoIcon />
      </div>
      <div className='pl-4'>
        <b>Note: </b>
        {children}
      </div>
    </aside>
  );
}
