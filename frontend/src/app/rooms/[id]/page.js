import { rooms, getRoomById } from '@/data/rooms';
import RoomDetailClient from '@/components/RoomDetailClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return rooms.map(r => ({ id: String(r.id) }));
}

export function generateMetadata({ params }) {
  const room = getRoomById(params.id);
  if (!room) return {};
  return {
    title: `${room.fullName} | Calmaria Bay Villa`,
    description: room.about.slice(0, 160),
  };
}

export default function RoomPage({ params }) {
  const room = getRoomById(params.id);
  if (!room) notFound();
  return <RoomDetailClient room={room} allRooms={rooms} />;
}
