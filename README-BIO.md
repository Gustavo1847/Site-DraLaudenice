# Página Bio - Dra. Laudenice

## 📋 Resumo

Foi criada uma página bio estilo Instagram para a Dra. Laudenice Lucena, acessível apenas via link direto (exemplo: `bio.dralaudenice.com.br`).

## ✨ Características da Página

### Design Moderno e Premium
- **Gradientes vibrantes**: Tons de rosa, roxo e laranja
- **Efeito Glassmorphism**: Elementos com transparência e blur
- **Animações suaves**: Fade-in, hover effects e micro-animações
- **Background animado**: Elementos decorativos com pulse animation
- **Responsivo**: Funciona perfeitamente em mobile e desktop

### Elementos da Página
1. **Foto de perfil profissional** com efeito de glow animado
2. **Logo/Nome** em card com glassmorphism
3. **Especialidades**: Cirurgiã Dentista | Estomatologista
4. **Ícones sociais**: Instagram e WhatsApp com hover effects
5. **Botões de links** com gradientes e animações:
   - 🗓️ AGENDAMENTO
   - 📍 LOCALIZAÇÃO
   - 🌐 NOSSOS SERVIÇOS
   - 🌐 SITE
6. **Footer** com copyright

## 🔗 Acesso

### Desenvolvimento Local
```
http://localhost:8080/bio
```

### Produção (após deploy)
```
https://bio.dralaudenice.com.br
ou
https://dralaudenice.com.br/bio
```

## 📝 Próximos Passos

### 1. Personalizar Links
Edite o arquivo `/src/pages/Bio.tsx` e atualize os links na constante `links`:

```typescript
const links = [
  {
    title: "AGENDAMENTO",
    description: "Agende sua consulta",
    url: "https://wa.me/5583988231994?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta", // ⚠️ ATUALIZAR
    icon: Calendar,
    gradient: "from-rose-400 to-pink-500",
  },
  // ... outros links
];
```

### 2. Atualizar Redes Sociais
Atualize os links das redes sociais:

```typescript
const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/dralaudenice", // ⚠️ ATUALIZAR
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5583988231994?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta", // ⚠️ ATUALIZAR
    icon: Phone,
  },
];
```

### 3. Substituir Foto de Perfil (Opcional)
Se quiser usar uma foto real da Dra. Laudenice:
1. Salve a foto em: `/public/Imagens/dra-laudenice-profile.png`
2. A foto já está configurada para usar esse caminho

### 4. Configurar Domínio/Subdomínio

#### Opção A: Subdomínio (bio.dralaudenice.com.br)
1. No seu provedor de DNS, crie um registro CNAME:
   - Nome: `bio`
   - Valor: mesmo destino do domínio principal
2. Configure o servidor web para servir a aplicação nesse subdomínio

#### Opção B: Rota no mesmo domínio (dralaudenice.com.br/bio)
- A rota `/bio` já está configurada e funcionando
- Após o deploy, estará acessível automaticamente

### 5. Deploy
Quando estiver pronto para fazer o deploy:

```bash
npm run build
```

O build será gerado na pasta `dist/` e pode ser enviado para o servidor.

## 🎨 Customizações Possíveis

### Adicionar Mais Links
Adicione novos objetos no array `links`:

```typescript
{
  title: "NOVO LINK",
  description: "Descrição do link",
  url: "https://exemplo.com",
  icon: Globe, // ou outro ícone do lucide-react
  gradient: "from-blue-400 to-cyan-500",
}
```

### Mudar Cores dos Gradientes
Opções de gradientes disponíveis:
- `from-rose-400 to-pink-500`
- `from-purple-400 to-pink-500`
- `from-pink-400 to-rose-500`
- `from-rose-400 to-orange-400`
- `from-blue-400 to-cyan-500`
- `from-green-400 to-emerald-500`

### Adicionar Mais Redes Sociais
Importe ícones do `lucide-react` e adicione ao array `socialLinks`:

```typescript
import { Facebook, Linkedin } from "lucide-react";

// Adicione ao array socialLinks
{
  name: "Facebook",
  url: "https://facebook.com/...",
  icon: Facebook,
}
```

## 📱 Testado e Funcionando

✅ Página carregando corretamente  
✅ Foto de perfil exibida  
✅ Animações funcionando  
✅ Hover effects nos botões  
✅ Links configuráveis  
✅ Design responsivo  
✅ Performance otimizada  

## 🛠️ Tecnologias Utilizadas

- **React** + **TypeScript**
- **Vite** (build tool)
- **TailwindCSS** (estilização)
- **shadcn/ui** (componentes)
- **Lucide React** (ícones)

## 📞 Suporte

Para dúvidas ou ajustes adicionais, entre em contato com a Vexio Studio.

---

**Criado por Vexio Studio** 🚀
