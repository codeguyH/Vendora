<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    public function Images()
    {
        return $this->hasMany(ProductsImages::class, 'product_id');
    }
}
