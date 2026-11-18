import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, ShieldCheck } from 'lucide-react'
import { products, formatPrice } from '@/lib/catalog'
import { AddToRequest } from '@/components/request-ui'
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export default async function ProductDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=products.find(p=>p.slug===slug);if(!product)notFound();return <div className="page-wrap container"><div className="breadcrumb">الرئيسية <span>/</span> المنتجات <span>/</span> {product.name}</div><div className="detail-layout"><div className="detail-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 100vw, 50vw"/></div><div className="detail-copy"><span className="eyebrow">{product.brand} · {product.model}</span><h1>{product.name}</h1><p>{product.description}</p><strong className="detail-price">{formatPrice(product.price)}</strong><span className="availability"><i/> متاح للاستفسار</span><div className="spec-list">{product.specs.map(spec=><span key={spec}><Check size={16}/>{spec}</span>)}</div><AddToRequest product={product}/><div className="detail-assurance"><ShieldCheck/> بيانات المنتج والأسعار توضيحية، يرجى التواصل للتأكيد وتفاصيل التوفر.</div></div></div></div>}
