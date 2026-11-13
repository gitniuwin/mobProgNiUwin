import React from 'react';
import { WINEWISE_HTML } from './winewisePrototype';

type Props = { onLoaded: () => void; onError: () => void };

export default function PrototypeView({ onLoaded, onError }: Props) {
  return React.createElement('iframe', {
    title: 'WineWise',
    srcDoc: WINEWISE_HTML,
    onLoad: onLoaded,
    onError,
    style: { width: '100%', height: '100%', border: '0', display: 'block', background: '#080305' },
    allow: 'clipboard-read; clipboard-write',
  } as any);
}
