'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
 
const CreateInvoiceSchema = FormSchema.omit({ id: true, date: true });
const UpdateInvoiceSchema = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const invoiceToCreate = CreateInvoiceSchema.parse(Object.fromEntries(formData.entries()));
  const amountInCents = invoiceToCreate.amount * 100;
  const nowAsDate = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${invoiceToCreate.customerId}, ${amountInCents}, ${invoiceToCreate.status}, ${nowAsDate})
  `;
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');

}

export async function updateInvoice(id: string, formData: FormData) {
  const invoiceToUpdate = UpdateInvoiceSchema.parse(Object.fromEntries(formData.entries()));
  const amountInCents = invoiceToUpdate.amount * 100;

  await sql`
    UPDATE invoices
    SET customer_id = ${invoiceToUpdate.customerId},
        amount = ${amountInCents},
        status = ${invoiceToUpdate.status}
    WHERE id = ${id}
  `;
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');

}

export async function deleteInvoice(id: string) {

  await sql`
    DELETE FROM invoices WHERE id = ${id}
  `;
 
  revalidatePath('/dashboard/invoices');
}