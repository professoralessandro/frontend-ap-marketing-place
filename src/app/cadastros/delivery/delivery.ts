import { TipoDocumentoEnum } from "src/app/Enums/tipo-documento.enum";
import { TipoEntregaEnum } from "src/app/Enums/tipo-entrega.enum";

export class Delivery {
    public identifier?: string;
    public responsavelEntregaId : string;
    public deliverymanDescription : string;
    public destinatarioId : string;
    public receiverDescription : string;
    public deliveryTypeEnum: TipoEntregaEnum | string;
    public dataPrevistaEntrega?: Date | string;
    public dataEfetivaEnrega: Date | string;
    public nmrDocumento: string
    public documentTypeEnum: TipoDocumentoEnum | string;
    public nomeRecebedor: string;
    public isEntregaTitular: boolean;
    public usuarioInclusaoId: string;
    public usuarioUltimaAlteracaoId?: string;
    public dataInclusao: Date;
    public dataUltimaAlteracao?: Date;
    public ativo: boolean;
}