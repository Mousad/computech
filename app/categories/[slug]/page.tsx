import { notFound } from 'next/navigation'
import { ProductGrid, SectionTitle } from '@/components/sections'
import { categories, products } from '@/lib/catalog'
export function generateStaticParams(){return categories.map(x=>({slug:x.slug}))}
export default async function CategoryDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const category=categories.find(x=>x.slug===slug);if(!category)notFound();const items=products.filter(p=>p.category===category.name);return <div className="page-wrap container"><div className="breadcrumb">الرئيسية <span>/</span> الأقسام <span>/</span> {category.name}</div><SectionTitle eyebrow={category.count} title={category.name}/><p className="page-intro">استكشف مجموعة {category.name} وأضف المنتجات التي تناسب احتياجك إلى قائمة الطلبات.</p><ProductGrid items={items}/></div>}
