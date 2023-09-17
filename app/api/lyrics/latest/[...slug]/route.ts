import { NextResponse } from 'next/server'
import fs from 'fs/promises';
 
export async function GET(request: Request,
  { params }: { params: { slug: string } }) {
  const jsonDirectory = process.cwd() + '/public/lyrics2.json';
  const fileContents = await fs.readFile(jsonDirectory, 'utf8');
  const data = JSON.parse(fileContents);

  console.log(params) 
  
  return NextResponse.json({ data })
}