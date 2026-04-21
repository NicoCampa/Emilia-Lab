import { iconMap, type IconName } from "@/content/site";

export function IconBadge({ icon }: { icon: IconName }) {
  const Icon = iconMap[icon];

  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-lime text-ink">
      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
    </span>
  );
}
