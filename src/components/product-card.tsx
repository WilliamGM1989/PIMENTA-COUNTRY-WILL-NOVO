import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { formatPrice, type Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.discountPercent !== undefined && product.discountPercent > 0
  const showNew = product.isNew || product.badge === "Novo"
  const isAccessory =
    product.category === "acessorio" || product.gender === "infantil"

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group flex flex-col min-w-[220px] w-[220px] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
    >
      <div
        className={`relative ${isAccessory ? "aspect-square" : "aspect-[4/3]"} w-full overflow-hidden rounded-xl bg-white`}
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`${isAccessory ? "object-contain p-3" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
          sizes="220px"
        />
        {hasDiscount && (
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center rounded px-1.5 py-0.5 text-xs font-bold bg-destructive text-white leading-none">
              -{product.discountPercent}%
            </span>
          </div>
        )}
        {!hasDiscount && showNew && (
          <div className="absolute top-2 left-2">
            <Badge variant="default" className="text-xs font-bold">
              NOVO
            </Badge>
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-col gap-0.5 px-0.5">
        {product.ref && (
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
            Ref. {product.ref}
          </span>
        )}
        <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </p>
        <div className="flex items-baseline gap-1.5 mt-1">
          {hasDiscount && product.originalPrice ? (
            <>
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-sm font-bold text-destructive">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="text-sm font-bold text-primary">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
        <span className="mt-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Ver produto →
        </span>
      </div>
    </Link>
  )
}
