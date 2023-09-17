import { NextResponse } from 'next/server'
import fs from 'fs/promises';
 
export async function GET() {
  const jsonDirectory = process.cwd() + '/public/lyrics1.json';
  const fileContents = await fs.readFile(jsonDirectory, 'utf8');
  const data = JSON.parse(fileContents);
  
  return NextResponse.json({ data })
}